
from html.parser import HTMLParser
from urllib.request import Request, urlopen
import json
import re
from pathlib import Path

BASE = "https://nuevasrevistas.com"
SOURCE = f"{BASE}/br/avon-catalogos/"
OUTPUT = Path("public/data/avon-campaigns.json")


class AvonParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = {}
        self.current_link = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)

        if tag == "a":
            href = attrs.get("href", "")
            match = re.search(
                r"revista-avon-campanha-(\d+)-brasil",
                href
            )
            if match:
                self.current_link = {
                    "ciclo": int(match.group(1)),
                    "url": href if href.startswith("http")
                    else BASE + href,
                }

        if tag == "img" and self.current_link:
            image = (
                attrs.get("data-lzl-src")
                or attrs.get("src", "")
            )

            if "br_avon_2026_catalogo_" in image:
                cycle = self.current_link["ciclo"]
                image = image.split("?")[0]

                self.items[cycle] = {
                    "id": f"avon-{cycle}-2026",
                    "titulo": f"Avon — Ciclo {cycle}/2026",
                    "ciclo": cycle,
                    "ano": 2026,
                    "capa": (
                        image if image.startswith("http")
                        else BASE + image
                    ),
                    "url": self.current_link["url"],
                }


request = Request(
    SOURCE,
    headers={"User-Agent": "Mozilla/5.0"}
)

with urlopen(request, timeout=30) as response:
    html = response.read().decode("utf-8", errors="replace")

parser = AvonParser()
parser.feed(html)

campaigns = sorted(
    parser.items.values(),
    key=lambda item: item["ciclo"],
    reverse=True
)

if not campaigns:
    raise RuntimeError(
        "Nenhuma campanha encontrada. "
        "O formato da página pode ter mudado."
    )

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(
    json.dumps(campaigns, ensure_ascii=False, indent=2),
    encoding="utf-8"
)

print(f"{len(campaigns)} campanhas salvas em {OUTPUT}")
for item in campaigns:
    print(f"Ciclo {item['ciclo']}: {item['url']}")


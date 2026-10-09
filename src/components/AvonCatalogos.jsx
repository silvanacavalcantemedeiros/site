import { useEffect, useState } from "react";
import { ExternalLink, BookOpen, LoaderCircle } from "lucide-react";
import "./AvonCatalogos.css";

export default function AvonCatalogos() {
  const [catalogos, setCatalogos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/avon-campaigns.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar catálogos");
        return res.json();
      })
      .then(setCatalogos)
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="avon-section" id="catalogos-avon">
      <div className="avon-container">
        <div className="avon-heading">
          <span className="avon-eyebrow">BELEZA E INSPIRAÇÃO</span>
          <h2>Catálogos Avon</h2>
          <p>
            Confira as campanhas mais recentes e descubra as novidades da Avon.
          </p>
        </div>

        {carregando ? (
          <div className="avon-status">
            <LoaderCircle className="avon-spinner" size={25} />
            <span>Carregando catálogos...</span>
          </div>
        ) : erro ? (
          <p className="avon-status">
            Não foi possível carregar os catálogos. Tente novamente mais tarde.
          </p>
        ) : (
          <div className="avon-grid">
            {catalogos.map((catalogo) => (
              <article className="avon-card" key={catalogo.id}>
                <a
                  className="avon-cover-link"
                  href={catalogo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${catalogo.titulo}`}
                >
                  <img
                    className="avon-cover"
                    src={catalogo.capa}
                    alt={`Capa do catálogo Avon, ciclo ${catalogo.ciclo}`}
                    loading="lazy"
                  />
                </a>

                <div className="avon-card-content">
                  <span className="avon-tag">
                    Campanha {catalogo.ciclo}/{catalogo.ano}
                  </span>

                  <h3>{catalogo.titulo}</h3>

                  <a
                    className="avon-button"
                    href={catalogo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen size={17} />
                    Ver catálogo
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

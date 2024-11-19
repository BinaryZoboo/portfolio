import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import CardProjects from "./CardProjects";

export default function ProjectsCarousel() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Récupération des données depuis le fichier JSON
    fetch("../data/projects.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const nextSlide = () => {
    if (cards.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }
  };

  const prevSlide = () => {
    if (cards.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center rounded-lg bg-zinc-100 p-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 dark:bg-regal-zinc-200 dark:ring-atlantis  dark:ring-offset-regal-zinc-300">
      <Element className="mb-4 self-start" name="project">
        <h2 className="bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent dark:from-atlantis dark:to-lime-800">
          • Projets
        </h2>
      </Element>
      <div className="relative w-full overflow-hidden rounded-lg border border-sky-800 px-12  py-6 min-[520px]:px-6 dark:border-lime-900">
        {/* Conteneur pour les slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // On déplace le carousel de 100% pour afficher la carte active
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full shrink-0" // Fixe la hauteur minimale des cartes
              style={{
                opacity: index === currentIndex ? 1 : 0, // Rendre la carte active visible
                transition: "opacity 0.5s ease-in-out", // Transition de fondu pour une animation fluide
                pointerEvents: index === currentIndex ? "auto" : "none", // Désactiver les événements sur les cartes non actives
              }}
            >
              {/* Passez les props à CardProjects avec ...card */}
              <CardProjects {...card} />
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <div className="static w-full items-center justify-center space-x-4 px-4">
          {/* Boutons de navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 top-1/2 bg-background/80 text-sky-500 backdrop-blur-sm min-[520px]:bottom-9 min-[520px]:left-auto min-[520px]:right-20 min-[520px]:top-auto dark:text-atlantis"
            onClick={prevSlide}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 top-1/2 bg-background/80 text-sky-500 backdrop-blur-sm min-[520px]:bottom-9 min-[520px]:right-5 min-[520px]:top-auto dark:text-atlantis"
            onClick={nextSlide}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

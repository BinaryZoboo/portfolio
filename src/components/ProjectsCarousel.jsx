import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import CardProjects from "./CardProjects";

export default function ProjectsCarousel() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Récupération des données depuis le fichier JSON
    fetch("src/data/projects.json")
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
    <div className="mx-auto max-h-min w-full overflow-hidden rounded-lg bg-zinc-50 p-4 ring-2 ring-atlantis ring-offset-4 ring-offset-regal-zinc-300 md:w-5/6  dark:bg-regal-zinc-200">
      <div className="relative w-full">
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
              className=" w-full shrink-0" // Fixe la hauteur minimale des cartes
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
        <div className="absolute bottom-4 right-0 flex items-center justify-center space-x-4 px-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
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

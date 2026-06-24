import Image from "next/image";
import { motion } from "framer-motion";

interface DishCardProps {
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export default function DishCard({ name, price, image, tag }: DishCardProps) {
  return (
    <motion.div
      className="group bg-void border border-gold/10 hover:border-gold/40 transition-colors duration-300 shadow-sm hover:shadow-xl overflow-hidden rounded-sm"
      whileHover={{ y: -4 }}
    >
      <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover img-warm transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-80" />
        {tag && (
          <div className="absolute top-4 left-4 bg-terracotta text-cream text-[8px] tracking-[0.2em] uppercase px-2 py-1 font-bold">
            {tag}
          </div>
        )}
      </div>
      <div className="p-5 md:p-6 bg-void">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-cream font-medium leading-tight group-hover:text-gold transition-colors">
            {name}
          </h3>
          <span className="text-[10px] tracking-widest text-text-muted shrink-0 pt-1">
            {price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

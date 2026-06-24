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
      className="group glass-card transition-all duration-700 shadow-sm hover:shadow-2xl overflow-hidden rounded-[3rem] p-3 md:p-4"
      whileHover={{ y: -8 }}
    >
      <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden rounded-[2.5rem]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        {tag && (
          <div className="absolute top-4 left-4 bg-saffron-gold text-on-surface font-label-sm text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-bold">
            {tag}
          </div>
        )}
      </div>
      <div className="pt-5 px-2 bg-transparent">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-headline-md text-xl text-on-surface font-medium leading-tight group-hover:text-saffron-gold transition-colors">
            {name}
          </h3>
          <span className="text-[10px] tracking-widest text-on-surface-variant shrink-0 pt-1">
            {price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

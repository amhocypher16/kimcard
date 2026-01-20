import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn('card-glass', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

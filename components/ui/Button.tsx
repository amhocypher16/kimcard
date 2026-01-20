import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      className={cn('btn-glass', className)}
      whileHover={{ scale: 1.05, boxShadow: '0 0 16px #00eaff' }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

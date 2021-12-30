import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type modalPropType = {
  isOpen: boolean;
  className?: string;
  overlay?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<modalPropType> = ({ isOpen, children, onClose, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          open={isOpen}
          onClose={onClose || (() => {})}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              type: 'spring',
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: 'easeIn',
              duration: 0.15,
            },
          }}
          className="fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center">
            <Dialog.Overlay
              className="fixed inset-0 bg-black bg-opacity-50"
              as={motion.div}
              initial={{
                opacity: 0,
                scale: 1,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.1,
                },
              }}
            />
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <div
              className={clsx(
                'inline-block z-20 relative bg-gray-200 p-2 w-full max-w-xl rounded-2xl',
                className
              )}>
              {children}
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { classNames } from "../../../utility/classNames";

interface NewCustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
  hasCross?: boolean;
  wrapperClassName?: string;
}

export default function NewCustomModal({
  isOpen,
  onClose,
  title,
  description,
  children,
  hasCross = true,
  contentClassName,
  className,
  wrapperClassName,
}: NewCustomModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return mounted && isOpen
    ? createPortal(
        <div
          role="portal"
          className={classNames(
            "fixed inset-0 z-1000 flex items-center justify-center px-4",
            "bg-opacity-50 bg-black/30 backdrop-blur-sm",
            wrapperClassName,
          )}
          onClick={onClose}
        >
          <div
            className={classNames(
              "relative flex max-h-[66vh] w-full max-w-1/2 flex-col rounded-2xl bg-white p-6",
              "shadow-lg",
              className,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <h2 className="text-[20px] font-semibold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm text-gray-700">{description}</p>
            )}

            {hasCross && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 cursor-pointer border-none bg-transparent text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                <span>✖</span>
              </button>
            )}

            <div
              className={classNames(
                "mt-4 flex w-full overflow-y-auto",
                contentClassName,
              )}
            >
              {children}
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
}

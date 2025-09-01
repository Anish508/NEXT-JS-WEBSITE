import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse" | "bars" | "gradient";
  text?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  variant = "spinner",
  text,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return (
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        );

      case "pulse":
        return (
          <div
            className={`${sizeClasses[size]} bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse`}
          ></div>
        );

      case "bars":
        return (
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            <div
              className="w-1 bg-blue-600 animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-1 bg-blue-600 animate-pulse"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-1 bg-blue-600 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1 bg-blue-600 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-1 bg-blue-600 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        );

      case "gradient":
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-spin"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          </div>
        );

      default: // spinner
        return (
          <div
            className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
          ></div>
        );
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}
    >
      {renderLoader()}
      {text && (
        <p
          className={`text-gray-600 font-medium ${textSizeClasses[size]} animate-pulse`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

// Full page loader component
export const FullPageLoader: React.FC<{ text?: string }> = ({
  text = "Loading...",
}) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
        <Loader variant="gradient" size="xl" text={text} className="py-4" />
      </div>
    </div>
  );
};

// Inline loader for buttons
export const ButtonLoader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
};

// Card loader
export const CardLoader: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 animate-pulse"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;

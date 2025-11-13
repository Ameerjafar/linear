interface ModernProductObject {
  imgSrc: string;
  content: string;
  alt?: string;
  onAddClick?: () => void;
}

export const ModernProductCard = ({ 
  imgSrc, 
  content, 
  alt = "Product image",
  onAddClick 
}: ModernProductObject) => {
  return (
    <div className="group relative w-80 h-85 rounded-xl bg-[#121212] overflow-hidden hover:bg-[#161618]">
      <div className="relative h-64 w-full overflow-hidden ">
        <img 
          src={imgSrc} 
          alt={alt}
          className="h-full w-full object-cover "
          loading="lazy"
        />
      </div>
      <div className="p-5 flex items-center justify-between gap-3">
        <p className="text-lg font-medium text-text-primary line-clamp-2 flex-1">
          {content}
        </p>
        
        <button
          onClick={onAddClick}
          aria-label={`Add ${content} to cart`}
          className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 text-gray-400 transition-all duration-200 hover:border-gray-400 hover:text-white hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#121212] active:scale-95"
        >
          <span className="text-xl font-light leading-none">+</span>
        </button>
      </div>
    </div>
  );
};

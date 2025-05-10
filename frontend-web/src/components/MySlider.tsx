import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const MySlider: React.FC<CustomSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
  className = "",
}) => {
  return (
    <SliderPrimitive.Root
      className={`relative flex w-full touch-none select-none items-center ${className}`}
      value={[value]}
      onValueChange={(v) => onChange(v[0])}
      min={min}
      max={max}
      step={step}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-white/30">
        <SliderPrimitive.Range className="absolute h-full bg-[#6c5ce7]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full bg-[#6c5ce7] shadow focus:outline-none"
        aria-label="Slider"
      />
    </SliderPrimitive.Root>
  );
};

export default MySlider;
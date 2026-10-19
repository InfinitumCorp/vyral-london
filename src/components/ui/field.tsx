import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-brand text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(control, "h-12", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={cn(control, "min-h-32 resize-y py-3 leading-body", className)} {...props} />
  );
}

export function FieldError({ id, children }: { id?: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="text-sm text-foreground" role="alert">
      {children}
    </p>
  );
}

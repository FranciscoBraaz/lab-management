import { Skeleton } from "@/shared/components/ui/skeleton";

export default function RoutineItemSkeleton() {
  return (
    <div className="flex justify-between items-start gap-4 p-4 border rounded-md shadow-sm">
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 max-w-32" />
        <Skeleton className="h-4 max-w-48" />
        <Skeleton className="h-4 max-w-56" />
        <Skeleton className="h-4 max-w-44" />
        <Skeleton className="h-4 max-w-64" />
        <Skeleton className="h-4 max-w-52" />
        <Skeleton className="h-4 max-w-40" />
      </div>

      <div className="flex flex-col items-end gap-[26px]">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

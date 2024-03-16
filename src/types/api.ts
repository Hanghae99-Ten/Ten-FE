export interface UseRouteError {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Record<string, unknown>;
}

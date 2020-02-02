export type ImageLoaderOptions = Partial<{
  jobLimit: number;
  timeout: number;
}>;

export type ImageLoaderJobOptions = {
  src: string;
  loadWithAjax: boolean;
  ajaxHeaders: any;
  crossOriginPolicy: string | boolean;
  ajaxWithCredentials: boolean;
  callback: (job: ImageJob) => void;
  abort: (job: ImageJob) => void;
};

export type ImageJob = {
  timeout: number;
  jobId: number | null;
  errorMsg: null | string;
  image: HTMLImageElement | null;
} & ImageLoaderJobOptions;

export interface ImageLoader {
  jobLimit: number;
  timeout: number;
  jobQueue: ImageJob[];

  addJob(options: Partial<ImageLoaderJobOptions>): void;
  clear(): void;
}

export interface ImageLoaderStatic {
  new (options?: ImageLoaderOptions): ImageLoader;
}

export class Service implements IService, IServiceSettable {
  private title: string = 'Loading...';
  private pid: NodeJS.Timeout;
  public on(streamHanler: StreamHanler) {
    this.pid = setInterval(
      () => {
        streamHanler(this.title, 'DATA BUFFER');
      }
    , 500);
  }
  public set(title: string) {
    this.title = title;
  }
  public off() {
    clearInterval(this.pid);
  }
}

export interface IService {
  on: (streamHanler: StreamHanler) => void;
  off: () => void;
}

export interface IServiceSettable {
  set: (title: string) => void;
}

type StreamHanler = (title: string, buffer: string) => void;

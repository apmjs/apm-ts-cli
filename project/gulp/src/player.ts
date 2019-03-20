import { IService } from './service';
import { STATUS, View } from './view';

export class Player {
  private status = STATUS.PENDING;
  private view: View;

  constructor(container: HTMLHtmlElement, private service: IService) {
    this.view = new View(container);
    this.view.onClickIcon((status) => this.handleStatus(status));

    service.on((title, buffer) => {
      this.view.update({
        title,
      });
    });
  }

  public play() {
    this.setStatus(STATUS.PLAYING);
  }

  public pause() {
    this.setStatus(STATUS.PENDING);
  }

  public stop() {
    this.setStatus(STATUS.STOPPED);
  }

  private setStatus(status: STATUS) {
    this.status = status;
    this.updateView();
  }

  private updateView() {
    this.view.update({
      status: this.status,
    });
  }

  private handleStatus(status: STATUS) {
    if (status === STATUS.PLAYING) {
      this.setStatus(STATUS.STOPPED);
    } else {
      this.setStatus(STATUS.PLAYING);
    }
  }
}

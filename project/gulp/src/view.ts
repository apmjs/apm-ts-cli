import { __inline } from '../global';

const domClass = 'bd-play';

export class View {
  private props: ViewProps = {status: 1};
  private html: string = __inline('./assert/player.tpl');
  private css: string = __inline('./assert/player.css');
  private dom: HTMLDivElement;
  constructor(private container: HTMLHtmlElement) {
    this.update({});
  }

  public update(props: IViewProps) {
    this.props.status = props.status || this.props.status;
    this.props.title = props.title || this.props.title || 'Loading...';
    this.render();
  }

  public render() {
    if (this.dom === undefined) {
      this.container.innerHTML = `<style>${this.css}</style>${this.html}`;
      this.dom = this.container.querySelector(`.${domClass}`) || this.dom;
    }
    const title = this.dom.querySelector(`.${domClass}-title`);
    const icon = this.dom.querySelector(`.${domClass}-icon`);
    if (title) {
      title.innerHTML = this.props.title || '';
    }
    if (icon) {
      icon.className = `${domClass}-icon ${domClass}-icon-${this.props.status}`;
    }
  }

  public onClickIcon(statusChangeHandler: (currentStatus: STATUS) => void) {
    if (this.dom) {
      const icon = this.dom.querySelector(`.${domClass}-icon`);
      if (icon) {
        icon.addEventListener('click', (evt) => {
          statusChangeHandler(this.props.status);
        });
      }
    }
  }
}

export interface IViewProps {
  status?: STATUS;
  title?: string;
}
interface ViewProps extends IViewProps {
  status: STATUS;
}

export enum STATUS {
  PENDING = 1,
  PLAYING = 2,
  STOPPED = 3,
}

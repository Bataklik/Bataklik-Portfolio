interface ProjectProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}
export class Project {
  private _id: number;
  private _src: string;
  private _alt: string;
  private _title: string;
  private _description: string;

  constructor({ id, src, alt, title, description }: ProjectProps) {
    this._id = id;
    this._src = src;
    this._alt = alt;
    this._title = title;
    this._description = description;
  }
  public get getId(): number {
    return this._id;
  }
  public get getSrc(): string {
    return this._src;
  }
  public get getAlt(): string | undefined {
    return this._alt;
  }
  public get getTitle(): string {
    return this._title;
  }
  public get getDescription(): string {
    return this._description;
  }
}

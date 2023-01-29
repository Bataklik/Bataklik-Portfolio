interface ProjectProps {
  id: number;
  src: string;
  alt: string;
}
export class Project {
  private _id: number;
  private _src: string;
  private _alt: string;

  constructor({ id, src, alt }: ProjectProps) {
    this._id = id;
    this._src = src;
    this._alt = alt;
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
}

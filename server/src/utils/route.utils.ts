export class RootRoute {}

export class ChildRoute {
	public readonly parentPath: string;

	constructor(parentPath: string) {
		this.parentPath = parentPath;
	}
}

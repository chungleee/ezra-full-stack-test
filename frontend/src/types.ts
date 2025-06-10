export interface Task {
	id: number;
	name: string;
	completed: boolean;
}

export type ApiResponse<T> =
	| {
			type: "success";
			data: T;
	  }
	| {
			type: "error";
			message: string;
	  };

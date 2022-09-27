class TaskError extends Error {
	public message: any;

    constructor(message: string) {
        super();
        this.message = message
    }
}

export default TaskError

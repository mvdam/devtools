
export class UnexpectedObjectError extends Error {
    constructor(props) {
      super(props);
      Object.setPrototypeOf(this, NetworkError.prototype);
    }
  }
  
  export class InternalServerError extends Error {
    constructor(props) {
      super(props);
      Object.setPrototypeOf(this, InternalServerError.prototype);
    }
  }
  
  const getMessageForError = (error: UnexpectedObjectError | InternalServerError) => {
    switch(error) {
      case instanceof UnexpectedObjectError:
        return 'UnexpectedObjectError'
      case instanceof InternalServerError:
        return 'InternalServerError'
      default:
        const exhaustive: never = error
        throw exhaustive
    }
  }
  
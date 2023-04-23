import React from "react";

export default function Modal() {
    return (
        <div className="modal fade" id="commentBox" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-bg-dark">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Comment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Post Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
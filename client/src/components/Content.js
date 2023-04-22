import React from "react";
import profile from "../images/chemistry.jpg"

export default function Content() {
    return (
        <main>
            {/* <div className="page-posts">
                <div className="profile-card">
                    <img className="profile-card-logo" src={profile} alt="User"/>
                </div>
                <div className="profile-post">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="page-utilities">
                <p>Work in progress!</p>
            </div> */}

            <div className="card w-75" style={{width: "18rem;"}}>
                <div className="card-header text-bg-dark">Community Name</div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">Username</h6>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* <a href="#" className="card-link">Upvote</a>
                    <a href="#" className="card-link">Downvote</a> */}
                </div>
                <div className="card-footer bg-transparent border-success">
                    <a href="#" className="card-link">Upvote</a>
                    <a href="#" className="card-link">Downvote</a>
                    <button type="button" class="btn btn-link comment-link" data-bs-toggle="modal" data-bs-target="#commentBox">Comment</button>
                </div>
            </div>
            <div class="modal fade" id="commentBox" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content text-bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Comment</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Post Comment</button>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
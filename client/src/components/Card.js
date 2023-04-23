import React from "react";
import Modal from "./Modal";

export default function Card() {
    return (
        <>
            <div className="card posts">
                <div className="card-header text-bg-dark">Community Name</div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        <a href="#" className="user">Username</a>
                    </h6>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <a href="#" className="card-link vote-action">
                        <i className="fa-solid fa-heart"></i>
                        <span>Like</span>
                    </a>
                    <a href="#" className="card-link vote-action">
                        <i className="fa-sharp fa-solid fa-heart-crack"></i>
                        <span>Dislike</span>
                    </a>
                    <button type="button" className="btn btn-link comment-action" data-bs-toggle="modal" data-bs-target="#commentBox">
                        <i className="fa-sharp fa-solid fa-comment"></i>
                        <span>Comment</span>
                    </button>
                </div>
            </div>
            <Modal/>
        </>
    )
}
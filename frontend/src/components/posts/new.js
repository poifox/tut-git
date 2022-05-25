import React, { Component } from "react";

export default class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: ''
        }
    }
    
    async handleSubmit(evt) {
        evt.preventDefault();
        const {target: form} = evt;
        const errors = [];
        const payload = {};
        if (form.title.value) {
            payload.title = form.title.value;
        } else {
            errors.push("title is empty");
        }
        if (form.content.value) {
            payload.content = form.content.value;
        } else {
            errors.push("content is empty");
        }
        if (form.author.value) {
            payload.author = form.author.value;
        } else {
            errors.push("author is empty");
        }
        if (errors.length === 0) {
            console.log("Payload ready", payload);
            const returnedPayload = await fetch("http://localhost:1337/posts", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(async (response) => {
                    return await response.json();
                })
                .catch((error) => {
                    console.warn("Error when saving post", error);
                    return null;
                });
            if (returnedPayload) {
                if (returnedPayload.success) {
                    window.location = '/blog';
                } else {
                    alert('Error: API failed to save new post');
                }
            } else {
                alert('Error: FATAL when creating post');
            }
        } else {
            alert(errors.join(". "));
        }
    }

    render() {
        return (
            <div>
                <h1>Create New Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                            Title
                            <input
                                type="text"
                                placeholder="Your title here..."
                                id="title"
                                name="title"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Contenido
                            <textarea
                                id="content"
                                name="content"
                                placeholder="Your content here..."
                            ></textarea>
                        </label>
                    </p>

                    <p>
                        <label>
                            Author
                            <input
                                type="text"
                                placeholder="Name of the Author"
                                id="author"
                                name="author"
                            />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Save Post</button>
                    </p>
                </form>
            </div>
        );
    }
}

/**
 * @typedef {{
 *  title: string,
 *  date: string,
 *  comments: string
 * }} Blog
 */


export function generateBlogId() {
    return crypto.randomUUID();
};

/**
 * 
 * @param {Blog} [blog]
 */
export function renderBlog(blogId, book) {
    return 1;
}





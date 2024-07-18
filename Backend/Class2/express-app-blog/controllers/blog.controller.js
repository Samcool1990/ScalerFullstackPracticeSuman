import fs from 'fs';


export const getAllBlog = (req,res) => {
    try{
        const blogData = fs.readFileSync('mocks/blog.mock.json');
        res.status(200).send(JSON.parse(blogData))
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const getBlogById = (req,res) => {
    try{
        const blogId = req.params.blogId
        const blogData = fs.readFileSync('mocks/blog.mock.json');
        const blogDataById = JSON.parse(blogData).find(blog => blog.id == blogId);
        res.status(200).send(blogDataById);
    }catch(e){
        res.status(500).send(e.message);
    }

};


export const deleteBlogById = (req,res) => {
    try{
        const blogId = req.params.blogId
        const blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        
        blogData.splice(blogIndexDataById,1);
        fs.writeFileSync('mocks/blog.mock.json',JSON.stringify(blogData));
        res.status(200).send('Blog Deleted');
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const CreateBlog = (req,res) => {
    try{
        const blogId = req.params.blogId
        const blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        blogData.splice(blogIndexDataById,1);
        fs.writeFileSync('mocks/blog.mock.json',JSON.stringify(blogData));
        res.status(200).send('Blog Deleted');
    }catch(e){
        res.status(500).send(e.message);
    }

};
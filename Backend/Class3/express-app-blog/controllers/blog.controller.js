import fs from 'fs';
import Blog from '../model/blog.model.js';


export const getAllBlog = async (req,res) => {
    try{
        // const blogData = fs.readFileSync('mocks/blog.mock.json');
        const allBlogsData = await Blog.find({});
        res.status(200).send(allBlogsData);
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const getBlogById = async (req,res) => {
    try{
        const blogId = req.params.blogId
        // const blogData = fs.readFileSync('mocks/blog.mock.json');
        // const blogDataById = JSON.parse(blogData).find(blog => blog.id == blogId);
        const blogData = await Blog.findById(blogId);
        res.status(200).send(blogData);
    }catch(e){
        res.status(500).send(e.message);
    }

};


export const deleteBlogById = async (req,res) => {
    try{
        const blogId = req.params.blogId
        // const blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        // const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);        
        // blogData.splice(blogIndexDataById,1);
        // fs.writeFileSync('mocks/blog.mock.json',JSON.stringify(blogData));
        const data = await Blog.findByIdAndDelete(blogId);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send(e.message);
    }

};

export const CreateBlog = async (req,res) => {
    try {
        const newBlogData = req.body;
        // let blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        // blogData = [...blogData, newBlogData];
        // fs.writeFileSync('mocks/blog.mock.json', JSON.stringify(blogData));
        const data = await Blog.create(newBlogData);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }

};



export const updateBlogById = async (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        // let blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        // const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        // blogData[blogIndexDataById] = {  ...blogData[blogIndexDataById], ...newBlogData };
        // fs.writeFileSync('mocks/blog.mock.json', JSON.stringify(blogData));
        const data = await Blog.updateOne({ _id: blogId }, {$set: newBlogData})
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}
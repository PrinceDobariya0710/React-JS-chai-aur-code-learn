import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);                 // Your project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId });
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId });
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)
            return true
        } catch (error) {
            throw error
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error

        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwirte service :: getPosts :: error ", error);
            return false
        }
    }

    //file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwirte service :: uploadFile :: error ", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwirte service :: deleteFile :: error ", error);
            return false
        }
    }

    getFilePreview(fileID) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileID)
        } catch (error) {
            console.log("Appwirte service :: getFilePreview :: error ", error);
            return ""
        }
    }
}

const service = new Service();

export default service;
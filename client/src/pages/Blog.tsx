import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { blogPosts, BlogPost } from "@/components/BlogSection";

export default function Blog() {
  const [match, params] = useRoute("/blog/:id");
  
  // If we're viewing a specific blog post
  if (match) {
    const blogId = params?.id;
    const post = blogPosts.find((post: BlogPost) => post.id === blogId);
    
    if (!post) {
      return (
        <div className="min-h-screen pt-28 pb-16 bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={() => window.location.href = '/#blog'}
                className="inline-flex items-center text-primary hover:text-primary-dark mb-8 bg-transparent border-none cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </button>
              
              <div className="text-center py-12">
                <h1 className="text-3xl font-bold text-primary mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 mb-8">We couldn't find the blog post you're looking for.</p>
                <button
                  onClick={() => window.location.href = '/#blog'}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors cursor-pointer border-none"
                >
                  Return to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
      <div className="min-h-screen pt-28 pb-16 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => window.location.href = '/#blog'}
              className="inline-flex items-center text-primary hover:text-primary-dark mb-8 bg-transparent border-none cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </button>
            
            <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-md mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-6">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p: BlogPost) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost: BlogPost) => (
                    <div key={relatedPost.id} className="bg-neutral-lightest rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div 
                        className="cursor-pointer"
                        onClick={() => window.location.href = `/blog/${relatedPost.id}`}
                      >
                        <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                        <span className="text-secondary font-medium text-sm">Read More</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // If we're viewing the blog landing page
  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-sans mb-4 text-primary">
            PurePoint Cleaning Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and industry knowledge for maintaining clean, healthy spaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post: BlogPost) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div 
                className="block cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center text-secondary font-medium">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = '/'}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors border-none cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
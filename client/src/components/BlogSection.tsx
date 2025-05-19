import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cleaningCrewImage, cleaningTeamImage, cleaningCrewAltImage, cleaningTeamAltImage } from "@/assets";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "why-clean-workspaces",
    title: "Why Clean Workspaces Are More Than Just Looks – The Business Impact of a Clean Environment",
    excerpt: "A clean space does more than sparkle—it speaks. Before your staff clock in or a client shakes your hand, your facility has already made its first impression.",
    coverImage: cleaningCrewImage,
    content: `
      <h1>Why Clean Workspaces Are More Than Just Looks – The Business Impact of a Clean Environment</h1>
      
      <p>A clean space does more than sparkle—it speaks. Before your staff clock in or a client shakes your hand, your facility has already made its first impression. At PurePoint Cleaning, we believe that a well-maintained workspace isn't just a matter of appearance—it's a strategic asset that impacts your business every single day.</p>
      
      <h2>First Impressions Matter</h2>
      
      <p>Clients and visitors make quick judgments the moment they enter your space. Streaky windows, dusty surfaces, or cluttered restrooms quietly erode trust. On the flip side, a spotless environment communicates professionalism, attention to detail, and care. Cleanliness becomes part of your brand identity.</p>
      
      <p>Whether it's a potential investor visiting your office or a bride touring your event venue, the quality of your space reflects the quality of your service.</p>
      
      <h2>Productivity Starts with Cleanliness</h2>
      
      <p>Studies show that employees are more focused, less stressed, and take fewer sick days in clean work environments. Clutter breeds distraction. Dirty surfaces harbor germs. A neglected breakroom or unkempt restroom can create subtle frustrations that build up over time.</p>
      
      <p>We've found that companies that prioritize cleanliness see improvements in:</p>
      <ul>
        <li>Morale and team satisfaction</li>
        <li>Daily workflow and focus</li>
        <li>Health and safety in shared spaces</li>
      </ul>
      
      <p>A clean space supports a clear mind—and clear minds get more done.</p>
      
      <h2>Health Is the New Baseline</h2>
      
      <p>Post-2020, cleanliness is no longer a background issue. It's a non-negotiable. Clients, employees, and partners expect safe, sanitized environments—and they're watching.</p>
      
      <p>At PurePoint Cleaning, we go beyond the basics. We:</p>
      <ul>
        <li>Sanitize high-touch surfaces like door handles and shared equipment</li>
        <li>Deep-clean restrooms and kitchens</li>
        <li>Ensure consistent trash removal and recycling</li>
        <li>Use safe, high-quality products</li>
      </ul>
      
      <p>Your people—and your reputation—deserve it.</p>
      
      <h2>Clean Once Isn't Clean Always</h2>
      
      <p>One-time cleans may offer a temporary shine, but true excellence requires consistency. That's why we build custom cleaning schedules for each client—ensuring your facility stays spotless day after day.</p>
      
      <p>From daily office maintenance to weekly resets, we work around your hours and your flow—so your business never skips a beat.</p>
      
      <h2>Our 100-Point Inspection Means Nothing Is Missed</h2>
      
      <p>We don't guess, we check. After every cleaning, we conduct a thorough 100-point inspection to ensure no detail is overlooked. From corners and baseboards to mirrors and floors, every item is checked—and many are photographed and logged.</p>
      
      <p>This isn't fluff. It's how we guarantee excellence every single time.</p>
      
      <p>At PurePoint Cleaning, we don't just clean spaces—we help your business shine.
      If you're ready for a higher standard of clean, let's talk.</p>
      
      <div class="cta-button">
        <a href="#contact">Request a Free Quote</a>
      </div>
    `
  },
  {
    id: "inside-the-closeout",
    title: "Inside the Closeout – Why Our Post-Clean Photo Process Sets Us Apart",
    excerpt: "You shouldn't have to wonder if your space was cleaned properly. At PurePoint Cleaning, we believe in trust through transparency.",
    coverImage: cleaningTeamImage,
    content: `
      <h1>Inside the Closeout – Why Our Post-Clean Photo Process Sets Us Apart</h1>
      
      <p>You shouldn't have to wonder if your space was cleaned properly. At PurePoint Cleaning, we believe in trust through transparency. That's why we offer something few others do: our signature Closeout Process—a photo-documented walkthrough that proves the job is done, and done right.</p>
      
      <h2>What Is the Closeout Process?</h2>
      
      <p>Once our cleaning is complete, our team conducts a detailed review of every space we serviced. During this review, we take high-quality photos of each room and log what was done—down to the final trash removal or mirror polish.</p>
      
      <p>It's not just a checklist—it's visual evidence that your expectations were met.</p>
      
      <h2>Why We Do It</h2>
      
      <p>We know you're busy. You may not be on-site. You may not have time to walk through every office or restroom. So we bring the proof to you.</p>
      <ul>
        <li>It builds trust: You know what we've done—without needing to be there.</li>
        <li>It ensures consistency: Our team takes pride in delivering repeatable results.</li>
        <li>It raises our standards: Our cleaners know their work is being reviewed and documented.</li>
      </ul>
      
      <h2>No Extra Fee, Just Extra Peace of Mind</h2>
      
      <p>This isn't a luxury service—it's our standard. Every client receives closeout photos, because we believe excellence should be visible.</p>
      
      <p>In an industry where "you get what you get" is too common, we flipped the narrative: You get what you pay for—and you get proof.</p>
      
      <h2>Who Benefits from the Closeout?</h2>
      
      <p>Whether you manage a church, a multi-room office, or a retail space, the closeout gives you clarity. Property managers use it to verify vendor performance. Business owners use it to assure stakeholders. And every client uses it to breathe a little easier.</p>
      
      <p>You shouldn't have to ask if the job got done. You should know.
      With PurePoint Cleaning, you do.</p>
      
      <div class="cta-button">
        <a href="#contact">Book a Walkthrough</a>
      </div>
    `
  },
  {
    id: "choosing-the-right-company",
    title: "Choosing the Right Commercial Cleaning Company – 5 Questions to Ask",
    excerpt: "Hiring a cleaning company should bring peace of mind, not more headaches. Here are 5 essential questions to ask.",
    coverImage: cleaningCrewAltImage,
    content: `
      <h1>Choosing the Right Commercial Cleaning Company – 5 Questions to Ask</h1>
      
      <p>Hiring a cleaning company should bring peace of mind, not more headaches. Unfortunately, many businesses don't realize how much they're missing until things go wrong—missed trash pickups, dusty baseboards, or careless cross-contamination.</p>
      
      <p>So how do you choose the right team? Here are 5 essential questions to ask.</p>
      
      <h2>1. Are You Licensed, Bonded, and Insured?</h2>
      
      <p>This is table stakes. If the answer isn't a confident yes, that's your cue to move on. At PurePoint Cleaning, we're fully licensed, bonded, and insured. That means your facility is protected, our team is covered, and you're never left liable.</p>
      
      <h2>2. What Happens If I'm Not Satisfied?</h2>
      
      <p>Too many companies disappear after the invoice is paid. Look for a provider that offers a real guarantee. We stand by our work. If you're ever unhappy, we'll make it right—no delays, no excuses.</p>
      
      <h2>3. How Do You Monitor Quality?</h2>
      
      <p>A checklist is good. Proof is better. Our 100-point inspections and post-clean photo documentation ensure every clean meets your expectations—visibly and verifiably.</p>
      
      <h2>4. Do You Understand My Type of Business?</h2>
      
      <p>Cleaning a church isn't the same as cleaning a clothing store. We serve offices, retail, churches, event venues, and more—and we know how to customize service by environment.</p>
      
      <h2>5. Can You Work Around My Schedule?</h2>
      
      <p>Whether your office closes at 5 or your venue wraps at midnight, we build our cleaning around your business flow. Flexibility is part of our professionalism.</p>
      
      <p>Choosing a cleaning company is choosing a partner.
      Ask the right questions—and you'll find the right fit.</p>
      
      <div class="cta-button">
        <a href="#contact">Let's Start the Conversation</a>
      </div>
    `
  },
  {
    id: "tailoring-cleaning-services",
    title: "From Churches to Offices – How We Tailor Cleaning to Fit Every Space",
    excerpt: "Your space is unique. It has its own energy, flow, and foot traffic—and it deserves a cleaning approach that respects that.",
    coverImage: cleaningTeamAltImage,
    content: `
      <h1>From Churches to Offices – How We Tailor Cleaning to Fit Every Space</h1>
      
      <p>Your space is unique. It has its own energy, flow, and foot traffic—and it deserves a cleaning approach that respects that. At PurePoint Cleaning, we don't believe in one-size-fits-all solutions. We tailor our services to fit your facility and your mission.</p>
      
      <h2>Church Buildings: Reverent and Reliable</h2>
      
      <p>Churches are more than buildings—they're sacred spaces where people gather to worship, pray, and find peace. Our team approaches each job with reverence, care, and reliability.</p>
      
      <p>We focus on:</p>
      <ul>
        <li>Entryways, lobbies, and sanctuaries</li>
        <li>Restroom and nursery sanitation</li>
        <li>Pre-service preparation and post-service reset</li>
      </ul>
      
      <h2>Office Environments: Clean = Focused</h2>
      
      <p>Cluttered desks, smudged glass, and dusty vents silently drain productivity. We support your team's focus and morale by delivering consistently clean environments.</p>
      
      <p>Our office services include:</p>
      <ul>
        <li>Dusting and sanitizing workstations</li>
        <li>Breakroom and kitchenette cleaning</li>
        <li>Trash, floors, and restroom sanitation</li>
      </ul>
      
      <h2>Event Spaces: When Turnaround Matters</h2>
      
      <p>Big events create big messes—and tight timelines. Whether it's a wedding, seminar, or celebration, we handle pre- and post-event cleaning with speed and precision.</p>
      
      <p>What we provide:</p>
      <ul>
        <li>Floor care and trash removal</li>
        <li>Mirror and glass polishing</li>
        <li>Full reset of restrooms and common areas</li>
      </ul>
      
      <h2>Public-Facing Businesses: You Only Get One First Impression</h2>
      
      <p>Your storefront is your silent salesman. If it's dirty, customers won't come back. We help you create an experience that's clean, consistent, and customer-ready.</p>
      
      <p>For retail and public-facing spaces, we offer:</p>
      <ul>
        <li>Floor polishing and fingerprint-free glass</li>
        <li>Dust-free shelves and displays</li>
        <li>Daily or weekly flexible scheduling</li>
      </ul>
      
      <p>Your business is unique—your cleaning plan should be too.
      Let's build a service that fits you.</p>
      
      <div class="cta-button">
        <a href="#contact">Schedule Your Custom Quote</a>
      </div>
    `
  }
];

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % blogPosts.length);
  };

  const visiblePosts = () => {
    // Mobile: 1 post, Tablet: 2 posts, Desktop: 3 posts
    const postCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    
    let posts = [];
    for (let i = 0; i < postCount; i++) {
      const index = (currentIndex + i) % blogPosts.length;
      posts.push(blogPosts[index]);
    }
    return posts;
  };

  return (
    <section id="blog" className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            Our Cleaning Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and industry knowledge to help maintain your spaces
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-6">
              {visiblePosts().map((post) => (
                <div key={post.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
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
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Previous blog posts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Next blog posts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4 md:hidden">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous blog posts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next blog posts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Blog Posts Link */}
        <div className="text-center mt-10">
          <button
            onClick={() => window.location.href = '/blog'}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
}
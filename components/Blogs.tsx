import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import blog1 from "../public/assets/images/blog1.jpg";
import blog2 from "../public/assets/images/blog2.jpg";
import blog3 from "../public/assets/images/blog3.jpg";
import blog4 from "../public/assets/images/blog4.jpg";

const Blogs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Blogs
        </h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 lgl:px-10">
      <ArchiveCard
          title="The Best UX Design for Your Next Project: Lessons from Duolingo"
          des=" 🖐️Hi everyone! If you’re looking to create an outstanding user experience (UX) for your next project, you’ve come to the right place. Today, we’re going to explore some fantastic UX . . ."
          listItem={["", "read", ""]}
          link="https://medium.com/@nimnadijayasundara12/the-best-ux-design-for-your-next-project-lessons-from-duolingo-93c0553c7c42"
          image={blog1}
        />
        <ArchiveCard
          title="Mastering Firebase Storage in React: Uploading and Deleting Files with Ease"
          des=" In modern web development, handling efficient file uploads and deletions is crucial for any application. Firebase provides a powerful and secure solution to mange user-generated . . ."
          listItem={["", "read", ""]}
          link="https://medium.com/@nimnadijayasundara12/mastering-firebase-storage-in-react-uploading-and-deleting-files-with-ease-5187bf70cb3d"
          image={blog2}
        />
        
        <ArchiveCard
          title="Mastering Microservice Architecture: A Beginner’s Guide for Aspiring Software Engineers"
          des=" The world of microservices can be exciting to dive into as an aspiring software engineer. This modern approach to software development is transforming how applications are built . . ."
          listItem={["", "read", ""]}
          link="https://medium.com/@nimnadijayasundara12/mastering-microservice-architecture-a-beginners-guide-for-aspiring-software-engineers-1d20519ea759"
          image={blog3}
        />
        <ArchiveCard
          title="Mastering Oracle and Object-Relational Databases"
          des=" If you’re new to databases or just curious about Oracle, you’re in the right place. Let’s break it down in a simple and easy-to-understand way.💡
              What is Oracle?
              Oracle is one of the world’s most widely used relational database management systems . . ."
          listItem={["", "read", ""]}
          link="https://medium.com/@nimnadijayasundara12/mastering-oracle-and-object-relational-databases-2f4aaef18c26"
          image={blog4}
        />
         

        {showMore && (
          <>
            No More

          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogs;
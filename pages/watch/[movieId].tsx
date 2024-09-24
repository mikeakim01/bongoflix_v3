import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

   // Function to prevent right-click
   const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Function to disable certain keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Example: Disable 's' key and 'p' key (can add more keys if needed)
    if (e.key === 's' || e.key === 'p') {
      e.preventDefault();
    }
  };
  
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon onClick={() => router.push('/')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video 
      className="
      h-full 
      w-full" 
      autoPlay 
      controls 
      controlsList='nodownload'
      onContextMenu={handleContextMenu} // Disable right-click
        onKeyDown={handleKeyDown} // Disable specific keyboard shortcuts
      src={data?.videoUrl}></video>
    </div>
  )
}

export default Watch;

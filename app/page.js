// "use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main>
    <div className="bg-black">
     <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 md:py-32 overflow-hidden shadow-xl rounded-b-3xl">
        {/* Background shapes for fancy effect */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Connect Instantly. Chat Freely.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            weTalk is your go-to app for seamless conversations, vibrant communities, and crystal-clear communication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/chat" className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
              Start Chatting Now
            </Link>
            <Link href="/learn-more" className="text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white rounded-xl shadow-lg mx-4 mt-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Why Choose weTalk?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-300 p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-blue-600 text-5xl mb-4">💬</div> {/* Emoji icon for chat */}
              <h3 className="text-xl   text-blue-400 font-semibold mb-3">Real-time Messaging</h3>
              <p className="text-gray-600">Experience lightning-fast message delivery and instant updates.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-300 p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-purple-600 text-5xl mb-4">🔒</div> {/* Emoji icon for security */}
              <h3 className="text-xl  text-blue-400 font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">Your conversations are encrypted and always kept private.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-300 p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-green-600 text-5xl mb-4">🌍</div> {/* Emoji icon for global */}
              <h3 className="text-xl text-blue-400 font-semibold mb-3">Global Connectivity</h3>
              <p className="text-gray-600">Connect with friends and family, no matter where they are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Optional) */}
      <section className="py-16 bg-blue-700 text-white text-center rounded-xl shadow-lg mx-4 mt-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Talking?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of users who love weTalk for its simplicity and power.</p>
          <Link href="/signup" className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-5 mt-8 rounded-t-xl">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} weTalk. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Keyframe animations for the blob effect */}
      {/* <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
     */}
     </div>
   </main>
  );
}
 export const metadata = {
  title:"Home-WeTalk",


  description:"This is place where you can chat"

 }
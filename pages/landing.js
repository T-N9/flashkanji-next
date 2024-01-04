/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1yMjMnCPiRN
 */
import Link from "next/link"

// export default function Landing() {
//   return (
//     <>
//       <section className="w-full py-12">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-[1fr_600px]">
//             <img
//               alt="Hero"
//               className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
//               height="550"
//               src="/placeholder.svg"
//               width="550"
//             />
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                   Master the Art of Kanji
//                 </h1>
//                 <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Join our interactive platform to learn and master the art of Kanji. Experience the joy of learning a
//                   new language in a fun and engaging way.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Link
//                   className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                   href="#"
//                 >
//                   Start Learning
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//             <div className="flex flex-col items-center space-y-4">
//               <ActivityIcon className="h-10 w-10" />
//               <h2 className="text-2xl font-bold">Interactive Lessons</h2>
//               <p className="max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
//                 Engage with our interactive lessons designed to make learning Kanji fun and easy.
//               </p>
//             </div>
//             <div className="flex flex-col items-center space-y-4">
//               <BrainCircuitIcon className="h-10 w-10" />
//               <h2 className="text-2xl font-bold">Stroke Order Practice</h2>
//               <p className="max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
//                 Practice the correct stroke order and improve your writing skills.
//               </p>
//             </div>
//             <div className="flex flex-col items-center space-y-4">
//               <BuildingIcon className="h-10 w-10" />
//               <h2 className="text-2xl font-bold">Vocabulary Building</h2>
//               <p className="max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
//                 Build your vocabulary with our extensive library of words and phrases.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
//             <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Join us today and start learning Kanji in an interactive and fun way. Let's make learning a new language
//               an exciting journey!
//             </p>
//             <Link
//               className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//               href="#"
//             >
//               Start Learning
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// function ActivityIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//     </svg>
//   )
// }


// function BrainCircuitIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
//       <path d="M16 8V5c0-1.1.9-2 2-2" />
//       <path d="M12 13h4" />
//       <path d="M12 18h6a2 2 0 0 1 2 2v1" />
//       <path d="M12 8h8" />
//       <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
//       <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
//       <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
//       <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
//     </svg>
//   )
// }


// function BuildingIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//       <path d="M9 22v-4h6v4" />
//       <path d="M8 6h.01" />
//       <path d="M16 6h.01" />
//       <path d="M12 6h.01" />
//       <path d="M12 10h.01" />
//       <path d="M12 14h.01" />
//       <path d="M16 10h.01" />
//       <path d="M16 14h.01" />
//       <path d="M8 10h.01" />
//       <path d="M8 14h.01" />
//     </svg>
//   )
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g9U5HB9IgAR
 */

// export default function landing() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
//         <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
//           Kanji Master
//         </Link>
//         <nav className="space-x-4">
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             About
//           </Link>
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="relative h-[500px] md:h-[600px] lg:h-[700px]">
//           <img
//             alt="Japanese Landscape"
//             className="absolute inset-0 object-cover w-full h-full"
//             src="/placeholder.svg"
//           />
//           <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center bg-black bg-opacity-50">
//             <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Learn Kanji The Easy Way</h1>
//             <p className="mt-4 text-lg text-white md:text-xl">
//               Master the art of Japanese writing with our interactive learning tools.
//             </p>
//             <Link
//               className="inline-flex items-center justify-center mt-6 px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-200"
//               href="#"
//             >
//               Start Learning
//             </Link>
//           </div>
//         </section>
//         <section className="py-12 bg-white dark:bg-gray-800">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 A better way to learn Kanji
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Explore the features that make learning Kanji a breeze.
//               </p>
//             </div>
//             <div className="mt-10">
//               <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                       <SearchIcon className="h-6 w-6" />
//                     </div>
//                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Kanji Dictionary</p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     Search for any Kanji and get its meaning, stroke order, and example usage.
//                   </dd>
//                 </div>
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                       <BookOpenIcon className="h-6 w-6" />
//                     </div>
//                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Kanji Flashcards</p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     Practice Kanji with our interactive flashcards that show pronunciation, meaning, and stroke order.
//                   </dd>
//                 </div>
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                       <CheckCircleIcon className="h-6 w-6" />
//                     </div>
//                     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Kanji Quizzes</p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     Test your knowledge with our Kanji quizzes. Get instant feedback on your answers.
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
//         <div className="flex items-center space-x-4">
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             Blog
//           </Link>
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             FAQ
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             <TwitterIcon className="h-6 w-6" />
//           </Link>
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             <FacebookIcon className="h-6 w-6" />
//           </Link>
//           <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
//             <InstagramIcon className="h-6 w-6" />
//           </Link>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function BookOpenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   )
// }


// function CheckCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//       <polyline points="22 4 12 14.01 9 11.01" />
//     </svg>
//   )
// }


// function FacebookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   )
// }


// function InstagramIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function TwitterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   )
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3jOxBqKH99C
 */

// export default function Landing() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <KanbanIcon className="h-6 w-6" />
//           <span className="sr-only">Kanji Master</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
//           <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
//             <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
//               <div>
//                 <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
//                   Master the Art of Kanji
//                 </h1>
//               </div>
//               <div className="flex flex-col items-start space-y-4">
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Join our community and embark on a journey to learn and master the beautiful art of Kanji.
//                 </p>
//                 <div className="space-x-4">
//                   <Link
//                     className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                     href="#"
//                   >
//                     Get Started
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <img
//               alt="Hero"
//               className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
//               height="300"
//               src="/placeholder.svg"
//               width="1270"
//             />
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container space-y-12 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Learn Kanji?</h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   Kanji is an essential part of the Japanese language. It not only enhances your language skills but
//                   also deepens your understanding of the Japanese culture.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Deepen Understanding</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Kanji characters often carry deep meanings, understanding them can enhance your comprehension of
//                   Japanese texts.
//                 </p>
//               </div>
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Improve Vocabulary</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Learning Kanji can significantly expand your vocabulary and make learning new words easier.
//                 </p>
//               </div>
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Enhance Writing Skills</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Kanji is an integral part of writing in Japanese. Mastering it can greatly improve your writing
//                   skills.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hear from our users</h2>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Our users love the journey of mastering Kanji with us. Here's what they have to say.
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
//               <div className="flex flex-col items-start space-y-4">
//                 <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
//                   “Kanji Master has made learning Kanji so much fun and easy. I love the daily Kanji feature.“
//                 </blockquote>
//                 <div>
//                   <div className="font-semibold">Jules Winnfield</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-start space-y-4">
//                 <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
//                   “I've always found Kanji intimidating, but Kanji Master has made it approachable and interesting.“
//                 </blockquote>
//                 <div>
//                   <div className="font-semibold">Mia Wallace</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">Designer, Initech</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Start your Kanji journey today</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Join our community and start learning Kanji today. It's free to sign up!
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
//               <Link
//                 className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                 href="#"
//               >
//                 Sign Up for Free
//               </Link>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Kanji of the Day</h2>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Learn a new Kanji character every day. Today's Kanji is:
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="text-9xl font-bold">愛</div>
//                 <div className="text-xl font-semibold">Love</div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   Stroke Order: 1-2-3-4-5-6-7-8-9-10-11-12-13
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© Kanji Master. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             About Us
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy Policy
//           </Link>
//         </nav>
//         <div className="flex gap-4">
//           <Link href="#">
//             <TwitterIcon className="h-5 w-5" />
//           </Link>
//           <Link href="#">
//             <FacebookIcon className="h-5 w-5" />
//           </Link>
//           <Link href="#">
//             <InstagramIcon className="h-5 w-5" />
//           </Link>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function FacebookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   )
// }


// function InstagramIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//     </svg>
//   )
// }


// function KanbanIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 5v11" />
//       <path d="M12 5v6" />
//       <path d="M18 5v14" />
//     </svg>
//   )
// }


// function TwitterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   )
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AylO1Elaomb
 */
// import { Button, Input } from "@material-tailwind/react"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-16 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <BookIcon className="h-6 w-6" />
//           <span className="sr-only">Kanji Master</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About Us
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Privacy Policy
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
//           <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
//             <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
//               <div>
//                 <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
//                   Master Kanji with Us
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Learn kanji in a fun and interactive way. Start your journey today!
//                 </p>
//                 <div className="space-x-4">
//                   <Link
//                     className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
//                     href="#"
//                   >
//                     Start Learning
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex flex-col items-start space-y-4">
//                 <img
//                   alt="Hero"
//                   className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
//                   height="300"
//                   src="/placeholder.svg"
//                   width="300"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container space-y-12 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Flashcards</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn Kanji with Flashcards</h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   Practice kanji characters with our interactive flashcards. Flip the card to reveal the stroke order.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Kanji 1</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Meaning: Example</p>
//                 <Button>Flip Card</Button>
//               </div>
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Kanji 2</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Meaning: Example</p>
//                 <Button>Flip Card</Button>
//               </div>
//               <div className="grid gap-1">
//                 <h3 className="text-lg font-bold">Kanji 3</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Meaning: Example</p>
//                 <Button>Flip Card</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn Stroke Orders</h2>
//               <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Search for a specific kanji character and learn its stroke order.
//               </p>
//             </div>
//             <div className="mx-auto w-full max-w-sm space-y-2">
//               <form className="flex space-x-2">
//                 <Input className="max-w-lg flex-1" placeholder="Search Kanji" type="text" />
//                 <Button type="submit">Search</Button>
//               </form>
//               <img
//                 alt="Stroke Order"
//                 className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
//                 height="300"
//                 src="/placeholder.svg"
//                 width="300"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
//               <div className="space-y-4">
//                 <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Quiz</div>
//                 <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
//                   Test Your Kanji Knowledge
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Take a quiz and see how much you've learned.
//                 </p>
//                 <div className="space-x-4">
//                   <Button>Start Quiz</Button>
//                 </div>
//               </div>
//               <div className="flex flex-col items-start space-y-4">
//                 <img
//                   alt="Quiz"
//                   className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
//                   height="300"
//                   src="/placeholder.svg"
//                   width="300"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© Kanji Master. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             About Us
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy Policy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oOgHXiJgTKO
 */

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Master Kanji with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Interactive learning tools designed to make kanji learning fun and effective.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Kanji Learning"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Flashcards</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn with Interactive Flashcards</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our flashcards provide a fun and interactive way to learn and review kanji. Flip the card to see the
                  meaning, pronunciation, and example sentences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Interactive Learning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Flip the card to learn the meaning, pronunciation, and example sentences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Track Your Progress</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mark cards as "learned" or "need more practice" to track your progress.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Learning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customize your learning by selecting the kanji you want to focus on.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Understand Stroke Orders</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn the correct stroke order for each kanji with our visual guides and tips.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <img
                alt="Stroke Order"
                className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Quiz Feature
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Test Your Knowledge
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Take our quizzes to test your kanji knowledge. Get immediate feedback and track your progress.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Start Quiz
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Quiz"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our users about their experience with Kanji Master.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="User 1"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "Kanji Master has made learning kanji fun and easy. I love the interactive flashcards!"
                  </p>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="User 2"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The stroke order guides are incredibly helpful. I've improved my kanji writing skills a lot."
                  </p>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="User 3"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The quizzes are a great way to test my knowledge. I can see my progress over time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}





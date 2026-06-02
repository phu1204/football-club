"use client";
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Testimonial() {
  const { t } = useLanguage();
const reviews = [
  {
    name: "Alex Morgan",
    username: "@alexm",
    body: "Chúng tôi đã chuẩn bị rất kỹ nhưng đội của bạn vẫn chơi vượt ngoài mong đợi. Kỷ luật và phối hợp cực kỳ ấn tượng.",
    img: "https://avatar.vercel.sh/alexm",
  },
  {
    name: "Ryan Lee",
    username: "@ryanlee",
    body: "Đây là một trong những trận đấu khó nhất mà chúng tôi từng tham gia. Đội của bạn có chiến thuật rất thông minh.",
    img: "https://avatar.vercel.sh/ryanlee",
  },
  {
    name: "Daniel Cruz",
    username: "@dcruz",
    body: "Tốc độ và tinh thần thi đấu của đội bạn thật sự khiến chúng tôi bất ngờ. Một màn trình diễn đáng tôn trọng.",
    img: "https://avatar.vercel.sh/dcruz",
  },
  {
    name: "Sophia Carter",
    username: "@sophiac",
    body: "Không chỉ mạnh về kỹ năng, đội của bạn còn giữ được sự bình tĩnh trong những thời điểm quyết định. Rất chuyên nghiệp.",
    img: "https://avatar.vercel.sh/sophiac",
  },
  {
    name: "Marcus Hill",
    username: "@marcush",
    body: "Sau trận đấu này tôi hiểu vì sao đội của bạn được đánh giá cao. Thi đấu rất gắn kết và đầy bản lĩnh.",
    img: "https://avatar.vercel.sh/marcush",
  },
  {
    name: "Ethan Brooks",
    username: "@ethanb",
    body: "Dù kết quả không như chúng tôi mong muốn nhưng được đối đầu với đội của bạn là một trải nghiệm tuyệt vời.",
    img: "https://avatar.vercel.sh/ethanb",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };


    
  return (
    <section className="section-padding bg-surface border-t border-border-default relative">
      <motion.div className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <motion.div  
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("test.title")}</h2>
                <h3 className="heading-xl text-text-primary">{t("test.headline")}</h3>
            </motion.div>
        </div>
        <motion.div className="relative flex w-full flex-col items-center justify-center overflow-hidden" variants={itemVariants} transition={{ duration: 0.6 }}>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
import { ArrowRedirect } from "../utils/icons";
import { LinkType } from "../utils/links";
import { motion } from "framer-motion";

export const CardComponent = (props: LinkType) => {
  const { linkName, linkURL } = props;

  return (
    <div className="card glass card-bordered w-80 items-center">
      <div className="card-title">
        <h2 className="text-base-0 btn-ghost card-title font-mono text-2xl tracking-wide subpixel-antialiased">
          {linkName}
        </h2>
        <div className="card-actions">
          <motion.div
            initial={{ scale: 0.0 }}
            animate={{ scale: 1.0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <a
              href={linkURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle no-animation"
            >
              <ArrowRedirect />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

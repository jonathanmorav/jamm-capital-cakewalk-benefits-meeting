import { motion } from "framer-motion";
import { Target, CheckCircle2, Circle, Loader2, Calendar, ArrowRight, Rocket } from "lucide-react";
import { validationMilestones } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statusConfig = {
  completed: {
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: "text-brand-mint",
    bg: "bg-brand-mint/20",
    border: "border-brand-mint/40",
    label: "Completed",
  },
  "in-progress": {
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/30",
    label: "In Progress",
  },
  upcoming: {
    icon: <Circle className="h-5 w-5" />,
    color: "text-brand-gray",
    bg: "bg-slate-100",
    border: "border-slate-200",
    label: "Upcoming",
  },
};

const RoadmapTab = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <div className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 via-white to-brand-lightMint/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Next 3–6 Months
              </span>
              <h3 className="text-2xl font-bold text-brand-darkBlue">
                Validation Phase
              </h3>
            </div>
          </div>
          <p className="text-brand-gray leading-relaxed max-w-2xl">
            Prove the model by building foundational proof points for rapid sustainable scaling.
          </p>
        </div>
      </motion.div>

      {/* Milestones Timeline */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10">
            <Target className="h-5 w-5 text-brand-purple" />
          </div>
          <h3 className="text-xl font-semibold text-brand-darkBlue">
            Key Milestones
          </h3>
        </div>

        <div className="space-y-4">
          {validationMilestones.map((milestone, idx) => {
            const config = statusConfig[milestone.status];
            const isLast = idx === validationMilestones.length - 1;
            
            return (
              <motion.div
                key={milestone.title}
                variants={fadeUp}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-6 top-14 h-[calc(100%+1rem)] w-0.5 bg-gradient-to-b from-brand-blue/20 to-brand-blue/5" />
                )}
                
                <div className={`flex items-start gap-4 rounded-2xl border ${config.border} ${config.bg} p-5 transition-all hover:shadow-md`}>
                  {/* Status Icon */}
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ${config.color}`}>
                    {config.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-brand-darkBlue">
                        {milestone.title}
                      </h4>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.color} ${config.bg}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-sm text-brand-gray">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Success Metrics Preview */}
      <motion.div variants={fadeUp} transition={{ delay: 0.5 }}>
        <div className="rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 via-white to-brand-lightMint/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="h-5 w-5 text-brand-purple" />
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
              Success Criteria
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 border border-brand-blue/10">
              <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">Engagement</div>
              <div className="text-lg font-bold text-brand-darkBlue">Validated</div>
              <p className="text-xs text-brand-gray mt-1">Partner activation rates</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-brand-purple/10">
              <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">Activation</div>
              <div className="text-lg font-bold text-brand-purple">Measured</div>
              <p className="text-xs text-brand-gray mt-1">Conversion funnels</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-brand-mint/20">
              <div className="text-xs text-brand-gray uppercase tracking-wide mb-1">Conversion</div>
              <div className="text-lg font-bold text-brand-blue">Optimized</div>
              <p className="text-xs text-brand-gray mt-1">SMB adoption rates</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.6 }}
        className="rounded-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-mint p-[2px]"
      >
        <div className="rounded-2xl bg-white p-6 text-center">
          <p className="text-lg font-medium text-brand-darkBlue">
            <span className="text-brand-blue font-bold">Iterate product and GTM</span> based on 
            learnings to establish scalable business processes
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-gray">
            <span>Data-driven optimization</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-semibold text-brand-purple">Rapid sustainable scaling</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoadmapTab;



import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Users, value: '800+', label: 'Élèves inscrits', description: 'garçons et filles', accent: 'bg-primary/10 text-primary' },
  { icon: BookOpen, value: '12', label: 'Filières', description: 'techniques & pro', accent: 'bg-accent/10 text-accent' },
  { icon: Award, value: '40+', label: 'Enseignants', description: 'et personnel', accent: 'bg-gold/10 text-gold' },
  { icon: GraduationCap, value: '20+', label: 'Années', description: 'd\'expérience', accent: 'bg-primary/10 text-primary' },
];

export const StatsSection = () => (
  <section className="relative -mt-16 z-10 pb-8">
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="bg-card rounded-2xl shadow-elevated border border-border/50">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/50">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 text-center group hover:bg-muted/30 transition-colors duration-300 animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${stat.accent} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-1">{stat.value}</p>
              <p className="font-display font-semibold text-sm text-foreground">{stat.label}</p>
              <p className="text-muted-foreground text-xs font-body mt-0.5">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Users, value: '850+', label: 'Élèves formés', color: 'text-primary' },
  { icon: BookOpen, value: '12+', label: 'Filières', color: 'text-accent' },
  { icon: Award, value: '45+', label: 'Enseignants', color: 'text-gold' },
  { icon: GraduationCap, value: '95%', label: 'Taux de réussite', color: 'text-primary' },
];

export const StatsSection = () => (
  <section className="relative -mt-12 z-10">
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <div className="bg-card rounded-2xl shadow-elevated p-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl p-6 text-center hover:bg-muted/50 transition-colors animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-3`} />
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

import { Crown } from 'lucide-react';
import { memo } from 'react';
import DecorativeLine from '../components/ui/DecorativeLine';
import { administration, type TeamGroup, teamGroups } from '../config/team';

const juniorAdmin = administration.find((admin) => admin.role === 'Мл.админ');
const seniorAdmins = administration.filter((admin) => admin.role !== 'Мл.админ');

type TeamPanelProps = {
  group: TeamGroup;
};

const TeamPanel = memo(function TeamPanel({ group }: TeamPanelProps) {
  return (
    <article className="team-panel">
      <h3>{group.title}</h3>
      <div className="team-rows">
        {group.categories.map((category) => {
          const Icon = category.icon;

          return (
            <div className="team-row" key={category.title}>
              <div className="team-category">
                <Icon size={42} strokeWidth={1.1} aria-hidden="true" />
                <span>{category.title}</span>
              </div>
              <div className="member-list">
                {category.members.map((member, index) => (
                  <div className="member" key={`${category.title}-${member.name}-${index}`}>
                    <span className={`avatar avatar-${member.tone}`} aria-hidden="true" />
                    <span className="member-name">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
});

function Team() {
  return (
    <section className="panel admin-panel" id="team" data-reveal aria-labelledby="team-title">
      <h2 id="team-title">Состав администрации</h2>
      <DecorativeLine />

      <div className="admin-cards">
        {seniorAdmins.map((admin) => (
          <article className="admin-card" key={admin.role}>
            <Crown size={42} strokeWidth={1.1} aria-hidden="true" />
            <div>
              <span>{admin.role}</span>
              <strong>{admin.name}</strong>
            </div>
          </article>
        ))}
      </div>

      {juniorAdmin ? (
        <article className="admin-card junior-card">
          <div>
            <span>{juniorAdmin.role}</span>
            <strong>{juniorAdmin.name}</strong>
          </div>
        </article>
      ) : null}

      <div className="team-grid">
        {teamGroups.map((group) => (
          <TeamPanel key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

export default memo(Team);

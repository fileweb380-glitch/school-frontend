import React from 'react'


const teachers = [
  {
    name: 'Alex Johnson',
    subject: 'Web Development',
    bio: 'Full-stack developer with 8+ years of experience.',
    avatar: '/photo_2026-04-29_10-57-44.jpg',
  },
  {
    name: 'Sara Mitchell',
    subject: 'Digital Marketing',
    bio: 'Helped 50+ brands grow their online presence.',
    avatar: '/photo_2026-04-29_10-57-39.jpg',
  },
  {
    name: 'Omar Hassan',
    subject: 'SEO Specialist',
    bio: 'Google-certified SEO expert with proven strategies.',
    avatar: '/photo_2026-04-29_10-57-28.jpg',
  },
  {
    name: 'Lena Park',
    subject: 'UI/UX Design',
    bio: 'Designer passionate about great user experiences.',
    avatar: '/photo_2026-04-29_10-57-09.jpg',
  },
]


// ========== SINGLE CARD COMPONENT ==========
function TeacherCard({ name, subject, bio, avatar }) {
  return (
    <div className="teacher-card">
      <img src={avatar} alt={name} className="teacher-avatar" />
      <h3 className="teacher-name">{name}</h3>
      <span className="teacher-subject">{subject}</span>
      <p className="teacher-bio">{bio}</p>
    </div>
  )
}



function Teachers() {
  return (
   <div>
 <section id="teachers" className="teachers-section"
  style={{backgroundColor:'#ffd662', height:'100%',width:'100%',
            backgroundSize:'cover'}}>

     
      <h2 className="teachers-title">
        Meet Our <span>Teachers</span>
      </h2>
      <p className="teachers-subtitle">
        Learn from real professionals with hands-on industry experience
      </p>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.name}
            name={teacher.name}
            subject={teacher.subject}
            bio={teacher.bio}
            avatar={teacher.avatar}
          />
        ))}
      </div>

    </section>
   </div>
  )
}

export default Teachers
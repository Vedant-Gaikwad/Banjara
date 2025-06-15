import React from 'react';
import EventCard from '../cards/EventCard.jsx';
import ForumPost from '../cards/ForumPost';
import GroupCard from '../cards/GroupCard';

const CommunityContent = ({ currentTab }) => {
  const eventsData = [
    {
      title: 'Digital Nomad Meetup',
      date: 'June 15, 2025',
      time: '7:00 PM',
      location: 'Impact Hub Bangkok',
      description: 'Join fellow nomads for networking, knowledge sharing, and good vibes!'
    },
    {
      title: 'Coworking Space Tour',
      date: 'June 18, 2025',
      time: '2:00 PM',
      location: 'Various locations',
      description: 'Discover the best coworking spaces in the city with other nomads.'
    }
  ];

  const forumsData = [
    {
      title: 'Best Neighborhoods in Bangkok for Nomads?',
      author: '@nomadmike',
      time: '2 hours ago',
      preview: 'Looking for recommendations on safe, affordable areas with good internet...',
      replies: 12,
      upvotes: 45
    },
    {
      title: 'Coworking vs Café Working - What\'s your preference?',
      author: '@digitalexplorer',
      time: '5 hours ago',
      preview: 'Curious about everyone\'s work style preferences and experiences...',
      replies: 8,
      upvotes: 23
    }
  ];

  const groupsData = [
    {
      title: 'Bangkok Tech Nomads',
      members: 234,
      activity: 'Daily',
      description: 'Community for tech professionals working remotely in Bangkok'
    },
    {
      title: 'Southeast Asia Nomads',
      members: 1456,
      activity: 'Weekly',
      description: 'Regional community covering Thailand, Vietnam, Malaysia and more'
    }
  ];

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '1.5rem'
  };

  switch (currentTab) {
    case 'events':
      return (
        <div>
          <h3 style={headingStyle}>Upcoming Events in Bangkok</h3>
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      );
    case 'forums':
      return (
        <div>
          <h3 style={headingStyle}>Popular Discussions</h3>
          {forumsData.map((post, index) => (
            <ForumPost key={index} post={post} />
          ))}
        </div>
      );
    case 'groups':
      return (
        <div>
          <h3 style={headingStyle}>Local Groups</h3>
          {groupsData.map((group, index) => (
            <GroupCard key={index} group={group} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default CommunityContent;

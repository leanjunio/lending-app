import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        email: 'ttremayle0@feedburner.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 2,
        email: 'tpietzner1@cnbc.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 3,
        email: 'bbranson2@example.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 4,
        email: 'melliker3@twitter.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 5,
        email: 'fspeechley4@about.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 6,
        email: 'njudson5@godaddy.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 7,
        email: 'rvallentin6@about.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 8,
        email: 'hpurbrick7@wsj.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 9,
        email: 'wmussalli8@zimbio.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 10,
        email: 'dcook9@twitpic.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 11,
        email: 'ctregenta@yellowbook.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 12,
        email: 'ejarrattb@msu.edu',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 13,
        email: 'lhefferanc@liveinternet.ru',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 14,
        email: 'sleirmonthd@nymag.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 15,
        email: 'aalsteade@homestead.com',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 16,
        email: 'lkuhntf@wsj.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 17,
        email: 'mmacsweeng@indiatimes.com',
        password: 'password',
        user_type: 'borrower'
      },
      {
        id: 18,
        email: 'kpeppinh@edublogs.org',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 19,
        email: 'pmanifoldi@bbb.org',
        password: 'password',
        user_type: 'lender'
      },
      {
        id: 20,
        email: 'mviveashj@flickr.com',
        password: 'password',
        user_type: 'borrower'
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import prisma from '../lib/prisma'
import bcrypt from 'bcryptjs'

const adminPass = process.env.ADMIN_PASSWORD || 'admin123'

async function main() {
  const hashPassword = await bcrypt.hash(adminPass, 10)
  const admin = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      password: hashPassword,
    },
  })

  console.log({ admin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

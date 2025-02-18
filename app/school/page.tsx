import { Button } from "@/components/ui/button"

export default function School() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Padel Pro School</h1>
        <p className="text-xl">Elevate your game with professional instruction</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Class Types</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Beginner Classes</h3>
            <p>Perfect for those new to padel. Learn the basics and build a strong foundation.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Intermediate Classes</h3>
            <p>Refine your skills and learn advanced techniques to take your game to the next level.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Advanced Classes</h3>
            <p>For experienced players looking to master complex strategies and improve their competitive edge.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Private Lessons</h3>
            <p>One-on-one instruction tailored to your specific needs and goals.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Pricing</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Class Type</th>
              <th className="border p-2 text-left">Duration</th>
              <th className="border p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Group Class</td>
              <td className="border p-2">1 hour</td>
              <td className="border p-2">$30 per person</td>
            </tr>
            <tr>
              <td className="border p-2">Private Lesson</td>
              <td className="border p-2">1 hour</td>
              <td className="border p-2">$80</td>
            </tr>
            <tr>
              <td className="border p-2">Intensive Workshop</td>
              <td className="border p-2">3 hours</td>
              <td className="border p-2">$100 per person</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact Information</h2>
        <p>To book a class or for more information, please contact us:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: info@padelpro.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Padel Court, Sportsville, SP 12345</li>
        </ul>
        <Button>Book a Class</Button>
      </section>
    </div>
  )
}


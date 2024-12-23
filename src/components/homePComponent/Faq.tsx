import TitleSeparator from "../common/TitleSeparator";

const Faq = () => {
  return (
    <div className=" text-black">
      {/* <!-- FAQ Section --> */}
      <section className="py-16 ">
        <TitleSeparator>Faqs</TitleSeparator>

        {/* <!-- Section Title --> */}
        <div className="mb-12 ">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Common Questions.
          </h2>
          <p className="text-lg text-gray-600">
            Answers to common queries about our services and processes.
          </p>
        </div>

        {/* <!-- FAQ Content --> */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What types of projects do you work on?
              </div>
              <div className="collapse-content">
                <p>
                  We handle a variety of projects from simple websites to
                  complex applications for businesses of all sizes including
                  websites, Android, iOS applications. Go to our services
                  section to learn more details.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How long does a typical project take?
              </div>
              <div className="collapse-content">
                <p>
                  The duration of the project varies depending on the scope, but
                  we provide detailed timelines during the project briefing
                  process.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Do you offer post-launch support?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Yes, we offer comprehensive post-launch support to ensure
                  everything works smoothly after the project is live.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What if I don’t have a technical background?
              </div>
              <div className="collapse-content">
                <p>
                  No problem! We will guide you through the process and explain
                  everything in simple terms.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How does the payment process work?
              </div>
              <div className="collapse-content">
                <p>
                  We accept payments via bank transfer, credit cards, or PayPal.
                  We typically require a deposit before starting the project and
                  the remaining balance after completion.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- image part --> */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../../../public/images/faqs_section_image.png"
              alt="FAQ Illustration"
              className="w-full max-w-sm "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

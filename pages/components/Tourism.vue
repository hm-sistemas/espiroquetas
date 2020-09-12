<template>
  <section id="tourism" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg mt--50">
        <div class="col-lg-8">
          <h2 class="display-3">Medical Tourism in Tijuana</h2>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-lg-12">
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row text-justify">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      More and more people receive medical care outside the
                      United States
                    </h6>
                    <p class="description mt-3">
                      According to the "2017 Survey of Medical Appointment Wait
                      Times and Medicare and Medicaid Acceptance Rates,"
                      patients wait an average of 24 days to schedule a
                      first-time appointment with a doctor; this represents an
                      increase of 30% compared to 2014.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'img/tourism/hm-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height: 300px"
                      alt="HM Tijuana image"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row text-justify">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      Less time consuming and more cost effective
                    </h6>
                    <p class="description mt-3">
                      In case of surgeries you should wait even longer after
                      seeing the doctor, for example, for an orthopedic surgery
                      you can add on average 12 more days. Tijuana has become a
                      very important option for patients who do not want to wait
                      that long, or for whom the financial resources are not
                      enough to cover an average cost of a hysterectomy surgery
                      (removal of the uterus) that reaches more than 15 thousand
                      Dollars. In Hospital Mexico a hysterectomy can be
                      scheduled in 48 hours and the average cost starts from $
                      4,300.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'img/tourism/cirugias-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height: 190"
                      alt="Surgeries in Tijuana image"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row text-justify">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">More benefits</h6>
                    <p class="description mt-3">
                      Medical tourism in Tijuana has been detonated in recent
                      years, taking advantage of the disadvantages of the health
                      service in the United States, but above all because of the
                      quality of the services offered, the proximity to San
                      Diego, fast access and communication routes, international
                      airport and other benefits you can find in the city such
                      as its history, cuisine, nightlife and adventure.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'img/tourism/panoramica-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height: 400"
                      alt="Panoramic view of Tijuana image"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Tourism',
}
</script>
